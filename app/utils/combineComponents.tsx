/* eslint-disable react/display-name */
import React, {
  ComponentProps,
  FC,
  JSXElementConstructor,
  PropsWithChildren,
  ReactNode,
} from 'react';

type Children = {
  children?: ReactNode;
};

interface Props {
  components: Array<
    React.JSXElementConstructor<React.PropsWithChildren<unknown>>
  >;
  children: React.ReactNode;
}

export default function Compose(props: Props) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}

export const combineComponents2 = (
  ...components: FC<Children>[]
): FC<Children> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
