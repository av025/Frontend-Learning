import { test, expect } from '@playwright/experimental-ct-react';
import App from '../src/App';

test('Basic Test', async ({ mount, page }) => {
  const component = await mount(<App />);

  await component.getByRole("button", { name: "Increment" }).click();

  const spanElement = component.getByTestId("count");

  await expect(component).toContainText('Learn React');
  await expect(spanElement).toHaveText("1");
  await page.screenshot({path:`screenshots/${Date.now()}.png`});
});



