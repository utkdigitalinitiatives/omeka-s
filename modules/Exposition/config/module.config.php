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
            'narrative' => Site\BlockLayout\Narrative::class,
        ],
    ],
    'form_elements' => [
        'invokables' => [
            Form\Section::class => Form\Section::class,
            Form\Narrative::class => Form\Narrative::class,
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
        'narrative' => [
            'manifest' => ''
        ],
    ],
];

?>