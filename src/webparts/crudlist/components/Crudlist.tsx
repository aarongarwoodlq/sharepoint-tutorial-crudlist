import * as React from 'react';
import styles from './Crudlist.module.scss';
import { ICrudlistProps } from './ICrudlistProps';
import { ICrudlistState } from './ICrudlistState';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Crudlist extends React.Component<ICrudlistProps, ICrudlistState, {}> {
  constructor(props: ICrudlistProps) {
    super(props);
    this.state = {}
  }

  public render(): React.ReactElement<ICrudlistProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.crudlist} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <div>
            <div>
              placeholder 1st column
            </div>
          </div>
        </div>
      </section>
    );
  }
}
