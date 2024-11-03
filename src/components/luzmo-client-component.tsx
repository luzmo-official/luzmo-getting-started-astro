import { LuzmoAIChatComponent } from '@luzmo/react-embed';

interface Props {
  authKey: string;
  authToken: string;
}

export default function LuzmoClientComponent({ authKey, authToken }: Props) {
  return (
    <section>
      <LuzmoAIChatComponent
        appServer={import.meta.env.PUBLIC_LUZMO_APP_SERVER}
        apiHost={import.meta.env.PUBLIC_LUZMO_API_HOST}
        authKey={authKey}
        authToken={authToken}
        options={{
          showChart: true,
          showConfiguration: true,
        }}
      />
    </section>
  );
}
