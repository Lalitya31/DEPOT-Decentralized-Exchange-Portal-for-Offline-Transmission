

# DEPOT

## Offline Digital Communication and File-Sharing Hub

DEPOT is a Raspberry Pi–based offline communication and file-sharing system designed to enable nearby devices to exchange information without requiring an internet connection, mobile network, or cloud infrastructure.

The system creates a local wireless network using a Raspberry Pi and provides users with a web-based interface through which they can exchange text messages, upload and download files, and view system information. All communication and data storage take place locally on the Raspberry Pi.

---

## Overview

Modern communication and file-sharing systems typically depend on internet connectivity or cloud services. DEPOT addresses this dependency by creating a self-contained local network that allows nearby users to communicate and exchange files even when external connectivity is unavailable.

The Raspberry Pi acts as the central hub, providing:

* A local Wi-Fi network
* A locally hosted web application
* Message exchange between connected users
* File upload and download functionality
* Local data storage
* System and network status information
* Connected-device monitoring

Users only need a Wi-Fi-enabled device such as a smartphone or laptop to access the system.

---

## Key Features

### Local Wireless Network

The Raspberry Pi creates its own Wi-Fi hotspot, allowing nearby devices to connect without requiring an existing router or internet connection.

### Web-Based Interface

Connected users access a locally hosted web application through their browser. No external website, cloud service, or internet connection is required.

### Offline Messaging

Users can exchange text messages with other devices connected to the local network.

### File Sharing

Users can upload files to the Raspberry Pi and download files shared by other connected users.

### Local Storage

Messages and files are stored locally on the Raspberry Pi, eliminating dependency on cloud storage.

### System Monitoring

The system can display information such as:

* Number of connected users
* Available storage
* Storage utilization
* System status
* Network status

A 16x2 LCD is used to provide hardware-level system information.

### Offline Operation

DEPOT is designed to operate independently of the internet, mobile networks, and external cloud infrastructure.

---

## System Architecture

```text
                         DEPOT
                           |
                    Raspberry Pi 3
                           |
          +----------------+----------------+
          |                |                |
       Wi-Fi AP        Web Server       Local Storage
          |                |                |
          |             Web App          Files/Data
          |                |
     Local Network      REST API
          |
    +-----+------+-------+------+
    |            |              |
 Smartphone   Smartphone      Laptop
    |            |              |
    +------------+--------------+
                 |
          DEPOT Web Interface
```

The Raspberry Pi serves as the central node of the system. Connected client devices communicate with the locally hosted application through the Raspberry Pi's wireless network.

---

## Technology Stack

### Hardware

* Raspberry Pi 3
* 16x2 LCD Display
* MicroSD Card
* Power Supply
* Wi-Fi-enabled client devices

### Software

* Raspberry Pi OS
* Local Wi-Fi Access Point
* Local Web Server
* REST API
* Local File Storage
* Web Browser

### Frontend

The web interface is implemented as a responsive web application designed for both mobile and desktop devices.

Recommended frontend technologies:

* React
* Vite
* HTML5
* CSS3
* JavaScript

### Backend

The backend runs locally on the Raspberry Pi and provides APIs for communication between the web interface and the local storage/network services.

Possible technologies include:

* Node.js
* Express.js
* SQLite / local filesystem

---

## Application Modules

### 1. Dashboard

Provides an overview of the DEPOT system, including:

* Network status
* Connected users
* Storage usage
* Quick access to messaging and file sharing

### 2. Messaging

Provides local text communication between connected users.

Core functionality includes:

* Sending messages
* Receiving messages
* Message history
* User identification
* Message timestamps

### 3. File Sharing

Provides a centralized local file repository.

Core functionality includes:

* File upload
* File listing
* File download
* File metadata
* File deletion where permitted

### 4. System Status

Displays information about the Raspberry Pi and local network, such as:

* Connected devices
* Storage capacity
* Storage utilization
* Server status
* Network status
* System uptime

### 5. Administrative Interface

An optional administrative interface can provide system-level controls and monitoring, including connected-user management and storage management.

---

## User Flow

```text
1. User powers on their device
            |
            v
2. User connects to DEPOT Wi-Fi
            |
            v
3. Local portal is opened
            |
            v
4. DEPOT web interface loads
            |
            v
5. User selects Messaging or Files
            |
       +----+----+
       |         |
       v         v
   Messaging   File Sharing
       |         |
       +----+----+
            |
            v
      Data stored locally
       on Raspberry Pi
```

---

## Project Structure

A possible project structure is:

```text
DEPOT/
|
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
|
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── storage/
│   ├── server.js
│   └── package.json
|
├── hardware/
│   ├── lcd/
│   └── network/
|
└── README.md
```

The exact structure may vary depending on the final implementation.

---

## API Architecture

The frontend communicates with the Raspberry Pi backend through local API endpoints.

Example endpoints:

```text
GET    /api/status
GET    /api/users

GET    /api/messages
POST   /api/messages

GET    /api/files
POST   /api/files
GET    /api/files/:id
DELETE /api/files/:id
```

All API communication takes place over the local network.

No external API or cloud service is required for core functionality.

---

## Offline Architecture

DEPOT does not depend on external internet connectivity.

```text
                 Internet
                    X
                    |
              Not Required
                    |
                    v
             +------------+
             | Raspberry  |
             |    Pi      |
             +------------+
                    |
              Local Wi-Fi
                    |
        +-----------+-----------+
        |           |           |
      Phone       Phone       Laptop
```

The Raspberry Pi provides the infrastructure required for communication, application hosting, and data storage.

---

## Hardware Display

A 16x2 LCD provides a simple hardware interface for displaying system-level information.

Example information:

```text
DEPOT OFFLINE
Users: 05

Storage
2.4GB / 16GB
```

The LCD allows the system to communicate basic status information even without accessing the web interface.

---

## Security Considerations

Since DEPOT operates within a local wireless network, appropriate safeguards should be implemented where required.

Potential security mechanisms include:

* Wi-Fi authentication
* User identification
* Session management
* Input validation
* File-type validation
* File-size restrictions
* Access control for administrative operations
* Protection against unauthorized file deletion
* Secure handling of uploaded files

The system is intended for controlled local environments rather than direct exposure to the public internet.

---

## Use Cases

DEPOT can be useful in environments where conventional internet connectivity is unavailable, unreliable, or intentionally avoided.

Potential applications include:

* Educational laboratories
* Remote locations
* Disaster-response environments
* Field operations
* Temporary events
* Offline classrooms
* Local workshops
* Emergency communication scenarios
* Infrastructure-independent file exchange

---

## Advantages

* Completely offline operation
* No cloud dependency
* No mobile network required
* Local and fast file exchange
* Centralized local storage
* Portable architecture
* Low-cost hardware
* Browser-based client interface
* Can support multiple nearby devices

---

## Future Enhancements

Possible future improvements include:

* End-to-end message encryption
* User authentication
* Peer-to-peer file transfer
* File previews
* Group messaging
* QR-based network access
* Improved captive portal support
* Storage management
* User permissions
* Activity logs
* Network traffic monitoring
* Larger display support
* Raspberry Pi battery-powered operation
* Synchronization between multiple DEPOT nodes

---

## Project Objective

The primary objective of DEPOT is to demonstrate how a low-cost embedded computing platform can provide essential communication and information-sharing capabilities without relying on conventional internet infrastructure.

The project combines embedded systems, computer networking, local web technologies, and human-computer interaction into a portable offline communication platform.

---

## Project Status

Development in progress.

The project is being developed as an embedded systems project using a Raspberry Pi 3 as the central processing and networking unit.

---

## License

This project is developed for academic and educational purposes.
