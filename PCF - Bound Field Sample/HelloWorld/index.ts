import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CustomInput, ICustomInputProps } from "../HelloWorld/src/CustomInput";

export class HelloWorld
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private props: ICustomInputProps = {
    value: "",
    onChange: this.notifyChange,
  };
  private _notifyOutputChanged: () => void;
  private _container: HTMLDivElement;
  private _value: string;

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._notifyOutputChanged = notifyOutputChanged;
    this._container = container;
    this.props.value = context.parameters.sampleProperty.raw || "";
    this.notifyChange = this.notifyChange.bind(this);
    this.props.onChange = this.notifyChange;

    //Trigger change so that UI can get initial Output
    this._notifyOutputChanged();
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    this._value = context.parameters.sampleProperty.raw || "";
    console.log("updateView " + this._value);
    this.props.value = this._value;

    ReactDOM.render(
      React.createElement(CustomInput, this.props),
      this._container
    );
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    console.log("getOutputs" + this._value);
    return {
      sampleProperty: this._value || "NULL-NAN",
    };
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }

  notifyChange(value: string) {
    this._value = value;
    this._notifyOutputChanged();
    console.log("value changed from react " + this._value);
  }
}
