class VersionDecoder {
    constructor(versionString) {
        this.versionString = versionString;
        this.parseVersion();
    }

    parseVersion() {
        this.topLevelVersion = parseInt(this.versionString.slice(0, 2));
        this.subLevelVersion = parseInt(this.versionString.slice(2, 4));
        this.system = this.versionString.charAt(4);
        this.releaseType = this.versionString.charAt(5);
        this.releaseVersion = parseInt(this.versionString.charAt(6));
    }

    getTopLevelVersion() {
        return this.topLevelVersion;
    }

    getSubLevelVersion() {
        return this.subLevelVersion;
    }

    getSystem() {
        
        return systems[this.system] || 'Unknown System';
    }

    getReleaseType() {
        const releaseTypes = {
            'A': 'Alpha',
            'B': 'Beta',
            'I': 'Internal',
            'R': 'Major Release',
            'D': 'Breaking Release',
            'S': 'Security Release',
            'F': 'Bug Fixes'
        };
        return releaseTypes[this.releaseType] || 'Unknown Release Type';
    }

    getReleaseVersion() {
        return this.releaseVersion;
    }

    toHumanReadable() {
        return `Version: ${this.topLevelVersion}.${this.subLevelVersion}, ` +
            `System: ${this.getSystem()}, ` +
            `Release Type: ${this.getReleaseType()}, ` +
            `Release Version: ${this.releaseVersion}`;
    }
}

const systems = {
    'H': 'Head Server Management System',
    'C': 'Core Web API',
    'E': 'Unreal Engine 5 SDK',
    'U': 'Unity SDK',
    'G': 'Godot SDK',
    'D': 'Data Server/Child Server System',
    'X': 'External SDKs (C++ and .NET)',
    'I': 'Internal System',
    'T': 'Total System Version'
};

function getLatestVersion(system="T", createClass=true) {
    fetch(`https://api.gridlock.galacticstudio.space/version/${system}`)
        .then(response => response.json())
        .then(data => {
            const versionString = data.version;
            if (createClass){
                return new VersionDecoder(versionString);
            } else {
                return versionString;
            }
        });
}


module.exports = {
    VersionDecoder,
    getLatestVersion,
    systems
};