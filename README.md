# Gridlock Version Decoder

## Information

The Gridlock Version Decoder is a JavaScript package designed to help teams decode and understand the versioning system used in Project Gridlock. This package provides functions to parse version strings, retrieve the latest version from the server, and convert version information into a human-readable format. 

## Getting Started

### Installation

To install the Gridlock Version Decoder package, use the following npm command:

`npm i gridlock-version-decoder`

### Basic Usage

Once installed, you can start using the Gridlock Version Decoder to decode version strings or fetch the latest version of a specific system.

Example:
```js
const { VersionDecoder, getLatestVersion } = require('gridlock-version-decoder');

const version = '0122TA1';
const decoder = new VersionDecoder(version);

console.log(decoder.getTopLevelVersion()); // Outputs: 01
console.log(decoder.getSubLevelVersion()); // Outputs: 22
console.log(decoder.getSystem());          // Outputs: Total System Version
console.log(decoder.getReleaseType());     // Outputs: Alpha
console.log(decoder.getReleaseVersion());  // Outputs: 1

// Fetch the latest version of the 'Core Web API' system and create a VersionDecoder instance
getLatestVersion('C').then(latestDecoder => {
    console.log(latestDecoder.toHumanReadable());
});
```
## Functions

### VersionDecoder Class

The `VersionDecoder` class provides several methods to decode different parts of the version string:

- **getTopLevelVersion()**: Returns the top-level version.
- **getSubLevelVersion()**: Returns the sub-level version.
- **getSystem()**: Returns the system name associated with the identifier.
- **getReleaseType()**: Returns the release type.
- **getReleaseVersion()**: Returns the release version.
- **toHumanReadable()**: Converts the version string into a human-readable format.

Example:
```js
const version = '0022TA1';
const decoder = new VersionDecoder(version);

console.log(decoder.toHumanReadable());
// Outputs: Version: 0.22, System: Total System Version, Release Type: Alpha, Release Version: 1
```
### getLatestVersion Function

The `getLatestVersion` function fetches the latest version for a specific system from the server and optionally creates an instance of `VersionDecoder`.

**Parameters**:
- **system** (default: "T"): The system identifier (e.g., 'T' for Total System Version).
- **createClass** (default: true): Whether to create and return a `VersionDecoder` instance or just the version string.

Example:
```js
getLatestVersion('C', false).then(versionString => {
    console.log(versionString); // Outputs the latest version string for the Core Web API system
});

getLatestVersion('C').then(latestDecoder => {
    console.log(latestDecoder.toHumanReadable()); // Outputs the human-readable version information
});
```
## Understanding the Versioning System

The versioning system follows a structured format to clearly identify updates across various systems and their stages of release. The format is **####AA#**.

### Version Format Breakdown

- **####**: Numeric representation of the version.
  - First two digits: Top-Level Version (major milestones)
  - Last two digits: Sub-Level Version (incremental updates)
- **A**: System Identifier (indicates which system received the update/change).
- **A**: Release Type (identifies the nature of the release).
- **#**: Release Version (specific iteration within the release stage).

### Example

Version String: `0022TA1`

- **00**: Top-Level Version
- **22**: Sub-Level Version
- **T**: System Identifier (Total System Version)
- **A**: Release Type (Alpha)
- **1**: Release Version (First Alpha Release)

### Version Components

#### 1. Top-Level Version (##)

The first two digits represent the major version of the software, indicating significant milestones or large-scale updates.

**Examples:**
- `00`: Initial version
- `01`: First major update

#### 2. Sub-Level Version (##)

The second two digits track smaller, incremental updates within the current top-level version.

**Examples:**
- `00`: Initial version
- `22`: Twenty-second minor update within this top-level version

#### 3. System Identifier (A)

The third character identifies the specific system receiving the update/change.

| Code | System Description                         |
|------|--------------------------------------------|
| H    | Head Server Management System              |
| C    | Core Web API                               |
| E    | Unreal Engine 5 SDK                        |
| U    | Unity SDK                                  |
| G    | Godot SDK                                  |
| D    | Data Server/Child Server System            |
| X    | External SDKs (including C++ and .NET)     |
| I    | Internal System                            |
| T    | Total System Version                       |

>**Note:** The **Total System Version (T)** is a generalized version number representing the entire system's version. It provides an organizational overview and a quick reference point, even if other subsystems have more frequent updates or are at diffrent version numbers.

#### 4. Release Type (A)

The fourth character signifies the type of release, allowing us to understand the nature of the update (e.g., a new feature, a bug fix, etc.).

| Code | Release Type     | Description                          |
|------|------------------|--------------------------------------|
| A    | Alpha            | Early stage testing and development  |
| B    | Beta             | Feature-complete but still in testing|
| I    | Internal         | Internal use and testing only        |
| R    | Major Release    | Publicly released major update       |
| D    | Breaking Release | Update that includes breaking changes|
| S    | Security Release | Security-related updates or fixes    |
| F    | Bug Fixes        | Minor updates to fix specific issues |

**Examples:**
- `A`: Alpha release
- `R`: Major public release

#### 5. Release Version (#)

The final digit indicates the specific iteration within a release stage.

**Examples:**
- `1`: First iteration of this release stage.
- `2`: Second iteration of this release stage.


## Conclusion

This versioning system is designed to offer clarity and organization as we manage and develop our complex software ecosystem. By understanding and using this system, all stakeholders, from developers to clients, can have a clear view of the software's progress and updates.

If you have any questions or need further assistance, please reach out to the development team.