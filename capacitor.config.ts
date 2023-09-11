import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'solar.test.test',
  appName: 'SolarManagement',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
