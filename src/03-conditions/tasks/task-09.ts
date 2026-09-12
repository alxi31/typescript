/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

type MachineStatus = {
    isPoweredOn: boolean;
    temperature: number;
    isHighVibration: boolean;
    productionSpeed: number;
};

const machineStatus: MachineStatus = {
    isPoweredOn: true,
    temperature: 95,
    isHighVibration: false,
    productionSpeed: 92
};

if (!machineStatus.isPoweredOn) {
    console.log("Machine Offline.");
}
else {
    if (machineStatus.temperature > 90) {
        if (machineStatus.isHighVibration) {
            console.log("Emergency Shutdown");
        }
        else {
            console.log("Cooling Required");
        }
    }
    else {
        if (machineStatus.productionSpeed < 80) {
            console.log("Performance Warning");
        }
        else {
            console.log("Machine Operating Normally");
        }
    }
}