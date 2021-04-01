<?php

namespace SimpleMirador;

return [
    'view_manager' => [
        'template_path_stack' => [
            dirname(__DIR__) . '/view',
        ],
    ],
    'view_helpers' => [
        'factories' => [
            'mirador' => Service\ViewHelper\SimpleMiradorFactory::class,
        ],
    ],
    'block_layouts' => [
        'invokables' => [
            'mirador' => Site\BlockLayout\SimpleMirador::class,
        ],
    ],
    'form_elements' => [
        'invokables' => [
            Form\IIIF::class => Form\IIIF::class,
        ],
    ],
];

?>