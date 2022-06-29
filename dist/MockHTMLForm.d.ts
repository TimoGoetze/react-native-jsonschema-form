import { Component } from 'react';
declare class Event {
    preventDefault(): void;
}
export declare class MockHTMLForm extends Component {
    render(): JSX.Element;
    dispatchEvent(e: Event): void;
}
export {};
