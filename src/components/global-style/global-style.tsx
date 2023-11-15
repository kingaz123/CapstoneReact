import "./global-style.css";

type Props = {
  children: React.ReactNode;
};

export function GlobalStyle(props: Props) {
  return <>{props.children}</>;
}
