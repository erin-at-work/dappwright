import { Page } from 'playwright-core';

import { clickOnButton, clickOnElement, getErrorMessage, openProfileDropdown, typeOnInputField } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const importPk =
  (page: Page, version?: string) =>
  async (privateKey: string): Promise<void> => {
    await page.bringToFront();
    await openProfileDropdown(page);

    await clickOnElement(page, 'Import account');
    await typeOnInputField(page, 'your private key', privateKey);
    await clickOnButton(page, 'Import');

    const errorMessage = await getErrorMessage(page);
    if (errorMessage) throw new SyntaxError(errorMessage);
  };
