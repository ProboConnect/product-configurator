# Probo Product Configurator

Version 0.0.0

## Overview

The Probo Product Configurator is a web component for customizing [probo.nl](https://probo.nl) print products. This configurator empowers users to personalize various print items so they can be ordered as the user pleases.

## Features

- **Dynamic Customization**: Users can dynamically customize their print products by selecting different options, including materials, sizes, quantities, etc.

- **Responsive Design**: The application is built with a responsive design to ensure a seamless experience across different devices and screen sizes.

- **Easy Integration**: Probo Product Configurator can be easily integrated into existing websites and e-commerce platforms as a web component, providing a consistent user experience.

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/ProboConnect/product-configurator.git
```

And include the web component:

```html
<script src="probo-product-configurator.js" rel="text/javascript"></script>
```

```html
<probo-product-configurator></probo-product-configurator>
```

### Proxy

To access the Probo API a proxy is needed. The proxy calls the Probo API `https://api.proboprints.com` and needs to accept the endpoints from the request `body.url`. See below for an example.

#### PHP

```php
<?php

$rawData = file_get_contents('php://input');

$decodedData = json_decode($rawData, true);

$baseUrl = 'https://api.proboprints.com';
$token = 'yourtoken';

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, sprintf('%s%s', $baseUrl, $decodedData['url']));
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'Authorization: Basic ' . $token
]);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($decodedData['data']));

$resp = curl_exec($curl);
curl_close($curl);

echo $resp;

```

### Initializing first steps

1. Set client API client with the link to the proxy.

```javaScript
const configurator = new ProboClient({ proxy: '/api' })
```

2. Set a product with the product code via the client. This will fetch the first step(s) for this product.

```javaScript
configurator.setProduct('banner-510');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2023 Probo.nl.
