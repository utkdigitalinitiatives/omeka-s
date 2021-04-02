<?php

namespace SimpleMirador;

return [
    'view_manager' => [
        'template_path_stack' => [
            dirname(__DIR__) . '/view',
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
    'simple_mirador' => [
        'iiif' => [
            'manifest' => ''
        ],
    ],
];

?>