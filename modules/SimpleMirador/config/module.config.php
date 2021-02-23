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
            'simplemirador' => Site\BlockLayout\SimpleMirador::class,
        ],
    ],
];

?>