import Homey from 'homey';

class IM6001Device extends Homey.Device {
   /**
    * onInit is called when the device is initialized.
    */
   async onInit() {
      this.log('IM6001Device has been initialized');
   }

   /**
    * onAdded is called when the user adds the device, called just after pairing.
    */
   async onAdded() {
      this.log('IM6001Device has been added');
   }

   /**
    * onSettings is called when the user updates the device's settings.
    * @param {object} event the onSettings event data
    * @param {object} event.oldSettings The old settings object
    * @param {object} event.newSettings The new settings object
    * @param {string[]} event.changedKeys An array of keys changed since the previous version
    * @returns {Promise<string|void>} return a custom message that will be displayed
    */
   async onSettings({
      oldSettings,
      newSettings,
      changedKeys,
   }: {
      oldSettings: {
         [key: string]: boolean | string | number | undefined | null;
      };
      newSettings: {
         [key: string]: boolean | string | number | undefined | null;
      };
      changedKeys: string[];
   }): Promise<string | void> {
      this.log('IM6001Device settings where changed');
   }

   /**
    * onRenamed is called when the user updates the device's name.
    * This method can be used this to synchronise the name to the device.
    * @param {string} name The new name
    */
   async onRenamed(name: string) {
      this.log('IM6001Device was renamed');
   }

   /**
    * onDeleted is called when the user deleted the device.
    */
   async onDeleted() {
      this.log('IM6001Device has been deleted');
   }
}

module.exports = IM6001Device;
