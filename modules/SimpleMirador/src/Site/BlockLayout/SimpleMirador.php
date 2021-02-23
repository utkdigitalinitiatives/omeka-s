<?php declare(strict_types=1);

namespace SimpleMirador\Site\BlockLayout;

use Laminas\View\Renderer\PhpRenderer;
use Omeka\Api\Representation\SitePageBlockRepresentation;
use Omeka\Api\Representation\SitePageRepresentation;
use Omeka\Api\Representation\SiteRepresentation;
use Omeka\Site\BlockLayout\AbstractBlockLayout;

class SimpleMirador extends AbstractBlockLayout
{
    public function getLabel()
    {
        return 'Simple Mirador Viewer'; // @translate
    }

    public function form(
        PhpRenderer $view,
        SiteRepresentation $site,
        SitePageRepresentation $page = null,
        SitePageBlockRepresentation $block = null
    ) {
        return $view->blockAttachmentsForm($block);
    }

    public function render(PhpRenderer $view, SitePageBlockRepresentation $block)
    {
        $attachments = $block->attachments();
        if (!$attachments) {
            return 'No resource selected'; // @translate
        }

        return $view->partial('common/block-layout/simple-mirador', [
            'attachments' => $attachments,
        ]);
    }
}
