import { FunctionComponent, PropsWithChildren } from 'react';

type CodeStepProps = PropsWithChildren<{
  number: number;
}>

export const CodeStep: FunctionComponent = (props: CodeStepProps) => {
  return (<div className="flex gap-4">
    <div>{props.number}</div>
    <div>
      {props.children}
    </div>
  </div>);
};
