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
            'section' => Site\BlockLayout\Section::class,
        ],
    ],
    'form_elements' => [
        'invokables' => [
            Form\Section::class => Form\Section::class,
        ],
    ],
    'exposition' => [
        'section' => [
            'heading' => '',
            'body' => '',
            'manifest' => '',
            'region' => 'full',
            'layout' => '',
            'orientation' => ''
        ],
    ],
];

?>