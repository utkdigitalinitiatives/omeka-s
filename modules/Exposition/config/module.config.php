<?php

namespace Exposition;

return [
    'view_manager' => [
        'template_path_stack' => [
            dirname(__DIR__) . '/view',
        ],
    ],
    'block_layouts' => [
        'invokables' => [
            'static-content' => Site\BlockLayout\StaticContent::class,
        ],
    ],
    'form_elements' => [
        'invokables' => [
            Form\StaticContent::class => Form\StaticContent::class,
        ],
    ],
    'exposition' => [
        'static-content' => [
            'manifest' => ''
        ],
    ],
];

?>