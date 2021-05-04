<?php declare(strict_types=1);

namespace Exposition\Form;

use Laminas\Form\Element;
use Laminas\Form\Fieldset;

class Narrative extends Fieldset
{
    public function init(): void
    {
        $this
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][manifest]',
                'type' => Element\Textarea::class,
                'options' => [
                    'label' => 'IIIF Manifest',
                    'info' => 'URI for 3.0 manifest',
                ],
                'attributes' => [
                    'id' => 'exposition-section-manifest',
                ],
            ]);
    }
}
