import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        label: {
            control: {
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3']
            }
        },
        allCaps: {
            control: {
                type: 'boolean'
            }
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary']
            }
        },
        fontColor: {
            control: {
                type: 'color'
            }
        }
    }

} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => 
    <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const FontColor = Template.bind({});
FontColor.args = {
    size: 'h1',
    fontColor: '#5e3db9' 
}