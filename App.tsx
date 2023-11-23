/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { AttentionCard, RocketUIProvider } from '@nassa-rocket-ui/mobile';
import { PoliciesDetail, ProductDashboardLayout, PolicyDownloadButton } from '@rocket-ui-mobile/policies';
import testImage from './code-examples/svg-image';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { fakeData } from './code-examples/fake-data';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PolicyDetailsExample } from './code-examples/ShowPolicyLayout';


function App(): JSX.Element {

  return (
    <RocketUIProvider>
      <SafeAreaProvider>
        {/* <AttentionCard
          severity="info"
          message="This is my first component"
        /> */}
        {/* <ProductDashboardLayout

          title="Incendio"
          loading={false}
          image={testImage} //svg image
          data={fakeData} // An array of PolicyInformationType objects
          backAction={() => console.log("BACK")}
          onPressItemData={(data: PoliciesDetail) => {
            console.log(data);
          }}
        /> */}
        <PolicyDetailsExample />
        {/* <PolicyDownloadButton
          url="www.testURL.com"
          getUrl={async () => "test"}
          documentName="test"
          ext='pdf'
          onError={(e) => console.log(e)}
        /> */}
      </SafeAreaProvider>
    </RocketUIProvider>
  );
}

export default App;
