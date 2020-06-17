import { html, slotted } from "@microsoft/fast-element";
import { Select } from "./select";

export const SelectTemplate = html<Select>`
    <template
    @oui-option-selection-change="${(x, c) => {
            let v = (c.event.target as any).value;
            x.value = v;
            x.optionSelectionChange(v)
        }
    }"
    class="${x => (x.readOnly ? "readonly" : "")}" open="${x => x.open ? "" : null}"
    >
        <slot tabindex="0" name="button-container"
        @keydown="${(x, c) => x.keypressHandlerButtonContainer(c.event as KeyboardEvent)}"
        @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}">
            <button part="button" aria-expanded="${x => x.open == true}" aria-haspopup="true">
                <span part="selected-value">
                    <slot name="selected-value">${x => x.value}</slot>
                </slot>
            </button>
        </slot>
        <slot name="listbox-container"
        @keydown="${(x, c) => x.keypressHandlerListbox(c.event as KeyboardEvent)}">
            <!-- This is where the listbox part will be inserted -->
            <slot></slot>
        </slot>
    </template>
`;