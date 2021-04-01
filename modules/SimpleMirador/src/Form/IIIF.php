<?php declare(strict_types=1);

namespace SimpleMirador\Form;

use Laminas\Form\Element;
use Laminas\Form\Fieldset;

class IIIF extends Fieldset
{
    public function init(): void
    {
        $this
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][manifest]',
                'type' => Element\Textarea::class,
                'options' => [
                    'label' => 'IIIF Manifest', // @translate
                    'info' => 'URI for 3.0 manifest', // @translate
                ],
                'attributes' => [
                    'id' => 'iiif-manifest',
                ],
            ]);
    }
}
