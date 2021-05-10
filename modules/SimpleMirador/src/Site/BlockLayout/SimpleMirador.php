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
    )
    {

        $services = $site->getServiceLocator();
        $formElementManager = $services->get('FormElementManager');
        $defaultSettings = $services->get('Config')['simple_mirador']['iiif'];
        $blockFieldset = \SimpleMirador\Form\IIIF::class;

        $data = $block ? $block->data() + $defaultSettings : $defaultSettings;

        $dataForm = [];
        foreach ($data as $key => $value) {
            $dataForm['o:block[__blockIndex__][o:data][' . $key . ']'] = $value;
        }

        $fieldset = $formElementManager->get($blockFieldset);
        $fieldset->populateValues($dataForm);

        return $view->formCollection($fieldset, false);
    }

    public function render(PhpRenderer $view, SitePageBlockRepresentation $block)
    {
        return $view->partial('common/block-layout/simple-mirador', [
            'blockId' => $block->id(),
            'manifest' => $block->dataValue('manifest'),
            'config' => $block->dataValue('config'),
            'mode' => $block->dataValue('mode'),
        ]);
    }
}
