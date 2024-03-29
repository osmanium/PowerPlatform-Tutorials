import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CustomInput, ICustomInputProps } from "../HelloWorld/src/CustomInput";

export class UnboundSample
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private props: ICustomInputProps = {
    onChange: this.notifyChange,
  };
  private _notifyOutputChanged: () => void;
  private _container: HTMLDivElement;

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
    this._container = container;
    this._notifyOutputChanged = notifyOutputChanged;
    this.props.value = context.parameters.sampleProperty.raw || "";
    console.log("init: " + this.props.value);
    this.notifyChange = this.notifyChange.bind(this);
    this.props.onChange = this.notifyChange;

    ReactDOM.render(
      React.createElement(CustomInput, this.props),
      this._container
    );
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view

    const { sampleProperty, colorProperty } = context.parameters;

    if (colorProperty && colorProperty.raw) {
      this.props.color = colorProperty.raw;
    }

    if (sampleProperty && sampleProperty.raw) {
      console.log(
        "updateView, from: " + this.props.value + " to: " + sampleProperty.raw
      );

      this.props.value = sampleProperty.raw || "";
      ReactDOM.render(
        React.createElement(CustomInput, this.props),
        this._container
      );
    }
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    console.log("getOutputs: " + this.props.value);
    return {
      sampleProperty: this.props.value,
    } as IOutputs;
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
    ReactDOM.unmountComponentAtNode(this._container);
  }

  notifyChange(value: string | undefined) {
    this.props.value = value;
    this._notifyOutputChanged();
    console.log("value changed from delegate method: " + this.props.value);
  }
}
