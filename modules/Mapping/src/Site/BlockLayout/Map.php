<?php
namespace Mapping\Site\BlockLayout;

use Omeka\Api\Representation\SiteRepresentation;
use Omeka\Api\Representation\SitePageRepresentation;
use Omeka\Api\Representation\SitePageBlockRepresentation;
use Omeka\Entity\SitePageBlock;
use Omeka\Stdlib\ErrorStore;
use Laminas\View\Renderer\PhpRenderer;

class Map extends AbstractMap
{
    public function getLabel()
    {
        return 'Map by attachments'; // @translate
    }

    public function onHydrate(SitePageBlock $block, ErrorStore $errorStore)
    {
        $block->setData($this->filterBlockData($block->getData()));

        // Validate attachments.
        $itemIds = [];
        $attachments = $block->getAttachments();
        foreach ($attachments as $attachment) {
            // When an item was removed from the base, it should be removed.
            $item = $attachment->getItem();
            if (!$item) {
                $attachments->removeElement($attachment);
                continue;
            }
            // Duplicate items are redundant, so remove them.
            $itemId = $item->getId();
            if (in_array($itemId, $itemIds)) {
                $attachments->removeElement($attachment);
            }
            $itemIds[] = $itemId;
            // Media and caption are unneeded.
            $attachment->setMedia(null);
            $attachment->setCaption('');
        }
    }

    public function form(PhpRenderer $view, SiteRepresentation $site,
        SitePageRepresentation $page = null, SitePageBlockRepresentation $block = null
    ) {
        $form = parent::form($view, $site, $page, $block);
        $form .= $view->blockAttachmentsForm($block, true, ['has_markers' => true]);
        return $form;
    }

    public function render(PhpRenderer $view, SitePageBlockRepresentation $block)
    {
        $data = $this->filterBlockData($block->data());
        $isTimeline = (bool) $data['timeline']['data_type_properties'];
        $timelineIsAvailable = $this->timelineIsAvailable();

        // Get markers (and events, if applicable) from the attached items.
        $events = [];
        $markers = [];
        foreach ($block->attachments() as $attachment) {
            $item = $attachment->item();
            if (!$item) {
                // This attachment has no item. Do not add markers.
                continue;
            }
            if ($isTimeline && $timelineIsAvailable) {
                // Set the timeline event for this item.
                $event = $this->getTimelineEvent($item, $data['timeline']['data_type_properties'], $view);
                if ($event) {
                    $events[] = $event;
                }
            }
            // Set the map markers for this item.
            $itemMarkers = $view->api()->search('mapping_markers', ['item_id' => $item->id()])->getContent();
            $markers = array_merge($markers, $itemMarkers);
        }

        return $view->partial('common/block-layout/mapping-block', [
            'data' => $data,
            'markers' => $markers,
            'isTimeline' => $isTimeline,
            'timelineData' => $this->getTimelineData($events, $data, $view),
            'timelineOptions' => $this->getTimelineOptions($data),
        ]);
    }
}
