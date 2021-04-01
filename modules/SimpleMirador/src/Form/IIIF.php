<?php declare(strict_types=1);
namespace SimpleMirador\Site;

use Laminas\Form\Element;
use Laminas\Form\Fieldset;

class IIIF extends Fieldset
{
    public function init(): void
    {
        $this
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][heading]',
                'type' => Element\Text::class,
                'options' => [
                    'label' => 'Block title', // @translate
                    'info' => 'Heading for the block, if any.', // @translate
                ],
                'attributes' => [
                    'id' => 'twitter-heading',
                ],
            ])
            ->add([
                'name' => 'o:block[__blockIndex__][o:data][account]',
                'type' => Element\Text::class,
                'options' => [
                    'label' => 'Account', // @translate
                ],
                'attributes' => [
                    'id' => 'twitter-account',
                ],
            ]);
    }
}
