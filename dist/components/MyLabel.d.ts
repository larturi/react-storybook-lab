/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
