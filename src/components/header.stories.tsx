import { Story } from "@storybook/react";
import HeaderComponent, { HeaderProps } from "./header";

export default {
  title: "Components/Header",
  components: HeaderComponent,
};

const Template: Story<HeaderProps> = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});

Header.args = {
  siteTitle: "Site title",
};
