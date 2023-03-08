import * as React from 'react';
import styles from './Crudlist.module.scss';
import { ICrudlistProps } from './ICrudlistProps';
import { ICrudlistState } from './ICrudlistState';
import { escape } from '@microsoft/sp-lodash-subset';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib";
import { Label, TextField, PrimaryButton } from "@fluentui/react";


export default class Crudlist extends React.Component<ICrudlistProps, ICrudlistState, {}> {
  constructor(props: ICrudlistProps) {
    super(props);
    this.state = {
      Requestor: [],
      SelectedOperation: []
    }
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
        <h1>C.R.U.D. Operations Form</h1>
        <br />
        <div id="id_CrudForm" className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.gridRow}>
              <div className={styles.smallCol}>
                <Label> Requestor </Label></div>
              <div className={styles.largeCol}>
                <PeoplePicker
                  context={this.props.context}
                  placeholder="User Name.."
                  ensureUser={true}
                  personSelectionLimit={1}
                  showtooltip={true}
                  disabled={false}
                  resolveDelay={1000}
                  principalTypes={[PrincipalType.User]}
                  onChange={this.GetPeoplePickerPersona}
                ></PeoplePicker>
              </div>
              <div className={styles.smallCol}><Label> Text column input</Label></div>
              <div className={styles.largeCol}>
                <TextField placeholder='Type something here'></TextField>
              </div>
              <div className={styles.smallCol}><Label> Taxonomy operation </Label></div>
              <div className={styles.largeCol}>
                <TaxonomyPicker
                  termsetNameOrID={this.props.taxonomyRoot}
                  panelTitle='Choose Operation'
                  label=''
                  context={this.props.context}
                  isTermSetSelectable={false}
                  allowMultipleSelections={false}
                  onChange={this.RetrieveTaxonomyValue}
                ></TaxonomyPicker>
              </div>
              <br></br>
              <div className={styles.smallCol}><PrimaryButton text='Submit'></PrimaryButton> </div>
              <br></br>
              <div id="id_ListForm" className={styles.container}>
                <span><button>Get List Data</button></span>
                <div className={styles.grid}>
                  <div className={styles.gridRow}>
                    <p>TO DO : some list data will go here</p>
                    <div>List Item row data</div>
                    <div className={styles.smallCol}><PrimaryButton text='Update'></PrimaryButton></div>
                    <div className={styles.largeCol}><PrimaryButton text="Delete"></PrimaryButton></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  public GetPeoplePickerPersona(items: any[]): any {
    console.log(items)
    let tempPersona: any[] = [];
    items.map((item) => {
      tempPersona.push(item)
    })
    this.setState({ Requestor: tempPersona })
    return null
  }

  public RetrieveTaxonomyValue(value: IPickerTerms): any {
    console.log(value);
    this.setState({ SelectedOperation: value })
    return null
  }


  
}
