# Azure Maps Demos

A collection of interactive demos showcasing Azure Maps capabilities.

## Current Status

**Note:** This project is under active development. Currently, only the MyMaps replacement demo is available. Additional demos and features are planned for future releases.

## Getting Started

### Prerequisites

- An Azure account with an Azure Maps resource
- Node.js and npm installed

### Setup

1. Clone this repository
2. Create a `config.json` file in the `web/public` directory with your Azure Maps credentials:

   ```json
   {
     "azureMapsClientId": "YOUR_CLIENT_ID",
     "token": "Generated token for Azure Maps, you will need at least Azure Maps Data Reader role"
   }
   ```

3. Run `npm start`
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Current Features (MyMaps Replacement)

- Create and save custom maps with pins
- Export/import map data to JSON
- Interactive map controls

## Planned Features

- Additional map visualization tools
- Geospatial analytics demos
- Route planning and optimization

## Authentication Plans

### Current Implementation
The demo currently uses token-based anonymous authentication with a pre-generated token stored in the config file.

### Planned Implementation
We are working on implementing a more secure authentication method using Azure Functions with Managed Identity:

1. **Azure Functions Backend**: Will handle token generation and renewal
2. **Managed Identity**: Will allow secure access to Azure Maps without storing credentials
3. **Role-Based Access Control**: Will be implemented to restrict access based on user roles

## Deployment

### Planned Deployment Pipeline
This project will be deployed using Azure Static Web Apps:

1. **GitHub Actions**: Automated CI/CD pipeline triggered on push to main branch
2. **Azure Static Web Apps**: Will host the frontend application
3. **Azure Functions**: Will provide backend API support for authentication and additional functionality

## Security Considerations

This demo currently uses anonymous authentication with a client ID and token. 
The planned implementation will use Microsoft Entra ID authentication with Managed Identity for Azure Maps.
Make sure to follow [Azure Maps security best practices](https://learn.microsoft.com/azure/azure-maps/security-overview).

## License

[MIT](LICENSE)
