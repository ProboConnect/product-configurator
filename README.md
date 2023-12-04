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

### Props

The configurator accepst a product ID, based on this ID the first step is fetched from the Probo API, after the first step is completed the second step is fetched, etc.

```html
<probo-product-configurator product="3032"></probo-product-configurator>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2023 Probo.nl.
