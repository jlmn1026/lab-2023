import type { Meta, StoryObj } from "@storybook/react";

import TestButton from "./TestButton";

const meta = {
  title: "TestButton",
  component: TestButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Width100: Story = {
  args: {
    children: "Test100",
    width: "100px",
  },
};

export const Width200: Story = {
  args: {
    children: "Test200",
    width: "200px",
  },
};
