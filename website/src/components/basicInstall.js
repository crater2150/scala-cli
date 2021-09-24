import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadButton from './DownloadButton';

export default function BasicInstall(props){
  return <div>
      <Tabs 
        groupId="operating-systems"
        defaultValue="win"
      values={[
        {label: 'Windows', value: 'win'},
        {label: 'macOS/Linux', value: 'mac/linux'},
      ]}>
        <TabItem value="win">
          <a className="no_monospace" href="https://github.com/VirtuslabRnD/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-win32.msi">
            Download Scala CLI for Windows
          </a>
        </TabItem>
        <TabItem value="mac/linux">
          <p>Run the following one-line command in your terminal 
            <br/>
            <code> bash
              curl -sSf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh
            </code>
          </p>
        </TabItem>
      </Tabs>
    </div>
}