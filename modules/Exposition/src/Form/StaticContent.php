<?php declare(strict_types=1);

namespace Exposition\Form;

use Laminas\Form\Element;
use Laminas\Form\Fieldset;

class StaticContent extends Fieldset
{
    public function init(): void
    {
        $this
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][heading]',
                'type' => Element\Text::class,
                'options' => [
                    'label' => 'Heading'
                ],
                'attributes' => [
                    'id' => 'exposition-static-heading',
                    'required' => true
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][html]',
                'type' => Element\Textarea::class,
                'attributes' => [
                    'label' => 'IIIF Manifest', // @translate
                    'class' => 'block-html full wysiwyg',
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][manifest]',
                'type' => Element\Textarea::class,
                'options' => [
                    'label' => 'IIIF Manifest', // @translate
                    'info' => 'URI for 3.0 manifest', // @translate
                ],
                'attributes' => [
                    'id' => 'exposition-static-iiif',
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][layout]',
                'type' => Element\Select::class,
                'options' => [
                    'label' => 'Layout', // @translate
                    'value_options' => array('Column'),
                    'empty_option' => 'Default',
                ],
                'attributes' => [
                    'id' => 'exposition-static-layout'
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][orientation]',
                'type' => Element\Select::class,
                'options' => [
                    'label' => 'Orientation', // @translate
                    'value_options' => array('Reverse'),
                    'empty_option' => 'Default',
                ],
                'attributes' => [
                    'id' => 'exposition-static-orientation'
                ],
            ]);
    }
}
