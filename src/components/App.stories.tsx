import { Story, Meta } from "@storybook/react";
import App from "./App";

type AppStory = Story<React.ComponentProps<typeof App>>;

export default { title: "App", component: App } as Meta;

export const DefaultAppState: AppStory = () => <App />;
