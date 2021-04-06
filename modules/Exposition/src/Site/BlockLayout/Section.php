<?php declare(strict_types=1);

namespace Exposition\Site\BlockLayout;

use Laminas\View\Renderer\PhpRenderer;
use Omeka\Api\Representation\SitePageBlockRepresentation;
use Omeka\Api\Representation\SitePageRepresentation;
use Omeka\Api\Representation\SiteRepresentation;
use Omeka\Site\BlockLayout\AbstractBlockLayout;

class Section extends AbstractBlockLayout
{
    public function getLabel()
    {
        return 'Exposition: Section'; // @translate
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
        $defaultSettings = $services->get('Config')['exposition']['section'];
        $blockFieldset = \Exposition\Form\Section::class;

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

        $view->headLink()->appendStylesheet($view->assetUrl('css/exposition.css', 'Exposition'));

        return $view->partial('common/block-layout/section', [
            'section' => array(
                'heading' => $block->dataValue('heading'),
                'body' => $block->dataValue('body'),
                'manifest' => $block->dataValue('manifest'),
                'layout' => $block->dataValue('layout'),
                'orientation' => $block->dataValue('orientation'),
            ),
        ]);
    }
}
