<?php declare(strict_types=1);

namespace Exposition\Form;

use Laminas\Form\Element;
use Laminas\Form\Fieldset;

class Section extends Fieldset
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
                    'id' => 'exposition-section-heading',
                    'required' => true,
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][body]',
                'type' => Element\Textarea::class,
                'options' => [
                    'label' => 'Body',
                ],
                'attributes' => [
                    'label' => 'Body',
                    'class' => 'block-html full wysiwyg'
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][manifest]',
                'type' => Element\Textarea::class,
                'options' => [
                    'label' => 'IIIF Manifest',
                    'info' => 'URI for 3.0 manifest',
                ],
                'attributes' => [
                    'id' => 'exposition-section-iiif',
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][layout]',
                'type' => Element\Select::class,
                'options' => [
                    'label' => 'Layout',
                    'value_options' => array(
                        'column' => 'Column'
                    ),
                    'empty_option' => 'Default',
                ],
                'attributes' => [
                    'id' => 'exposition-section-layout'
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][orientation]',
                'type' => Element\Select::class,
                'options' => [
                    'label' => 'Orientation',
                    'value_options' => array(
                        'reverse' => 'Reverse'
                    ),
                    'empty_option' => 'Default',
                ],
                'attributes' => [
                    'id' => 'exposition-section-orientation'
                ],
            ]);
    }
}
