// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Imagine Kit Documentation',
			social: {
				github: 'https://github.com/Arttribute/imagine-kit',
			},
			sidebar: [
				{
					label: '🚀 Getting Started',
					items: [
						{ label: '👋 What is Imagine Kit?', slug: 'guides/getting-started/what-is-imagine-kit' },
						{ label: '🔥 Why Use Imagine Kit?', slug: 'guides/getting-started/why-use-imagine-kit' },
					],
				},
				{
					label: '✨ Using Imagine Kit',
					items: [
						{ label: '🎭 Create Fun AI Apps', slug: 'guides/usage/create' },
						{ label: '🔗 Monetize with Blockchain', slug: 'guides/usage/monetize' },
					],
				},
				{
					label: '🏗️ Buidling My First App',
					items: [
						{ label: '🔧 Step 1: Set Up the Project', slug: 'guides/build/step-1' },
						{ label: '📝 Step 2: Create the Storytelling Logic', slug: 'guides/build/step-2' },
						{ label: '💬 Step 3: Display the Story Text', slug: 'guides/build/step-3' },
						{ label: '🎤 Step 4: Convert Story Text to Audio', slug: 'guides/build/step-4' },
						{ label: '🖼️ Step 5: Generate and Display Images', slug: 'guides/build/step-5' },
						{ label: '🚀 Step 6: Finalize and Publish', slug: 'guides/build/step-6' }
					],
				},
				{
					label: '🛠️ Imagine Kit Components',
					items: [
						{ label: '🤖 AI Components', slug: 'guides/components/ai' },
						{ label: '🎨 UI Elements', slug: 'guides/components/ui' },
					],
				},
				{
					label: '⚙️ Profile Settings',
					items: [
						{ label: '👤 Creating an Account and Logging In', slug: 'guides/profile/create' },
						{ label: '🧭 Navigating the Profile Page', slug: 'guides/profile/navigate' },
						{ label: '✏️ Editing Your Profile', slug: 'guides/profile/edit' },
						{ label: '🌍 Managing Your Worlds', slug: 'guides/profile/manage' },
					],
				},
				{
					label: '🤖 AI Capabilities',
					items: [
						{ label: '🤖 AI Capabilities', slug: 'guides/ai-capabilities' },
					],
				},
				{
					label: '💾 Data Management',
					items: [
						{ label: '🗄️ Where is My Data Stored?', slug: 'guides/data-management/data-storage' },
  						{ label: '👥 Managing User Data', slug: 'guides/data-management/user-data-management' },
					],
				},
				{
					label: '💰 Monetization & Blockchain',
					items: [
						{ label: '🛒 Selling AI Content', slug: 'guides/monetization/selling' },
  						{ label: '📜 Smart Contract Integrations', slug: 'guides/monetization/smart-contract' },
					],
				},
				{
					label: '🛠️ Troubleshooting & FAQs',
					items: [
						{ label: '📋 Common Issues & Fixes', slug: 'guides/troubleshooting/common-issues' },
						{ label: '🐞 Debugging Tips', slug: 'guides/troubleshooting/debugging' },
					  ],
				},
				{
					label: '🎉 Join the Community ',
					items: [
						{ label: '📢 Get Help', slug: 'guides/community/get-help' },
						{ label: '🔮 What’s Next for ImagineKit?', slug: 'guides/community/whats-next' },
					],
				},
				
			],
		}),
	],
});
