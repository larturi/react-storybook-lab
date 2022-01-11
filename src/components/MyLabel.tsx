import './MyLabel.css';

export interface MyLabelProps {
    /**
    * Este es el texto que se muestra en el label
    */
    label: string;
    /**
    * Este es el tamaño del label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Si esta en true el label se muestra el texto en mayúscula
    */
    allCaps?: boolean;
    /**
    * Aplica un color al label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Aplica el color seleccionado al label
    */
    fontColor?: string;
}

export const MyLabel = ( {
    label = 'No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps ) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}


export default MyLabel;