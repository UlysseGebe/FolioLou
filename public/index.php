<?php

/**
 * Configuration
 */
define('URL', 'http://localhost:8888/routing-2/public/');

/**
 * Routing
 */
// Get 'q' param
$q = !empty($_GET['q']) ? $_GET['q'] : 'home';

// Define controller
$controller = '404';
if ($q == 'home') {
    $controller = 'home';
}

// Include controller
include '../controllers/'.$controller.'.php';
