import HeaderComponent from "./header"

export default {
  title: "Components/Header",
  components: HeaderComponent,
}

const Template = args => <HeaderComponent {...args} />

export const Header = Template.bind({})

Header.args = {
  siteTitle: "Site title",
}
