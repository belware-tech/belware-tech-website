import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const belwaretech: CustomThemeConfig = {
	name: 'belwaretech',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '2px',

		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',

		// =~= Theme Colors  =~=
		// primary | #EE8E4F
		'--color-primary-50': '252 238 229', // #fceee5
		'--color-primary-100': '252 232 220', // #fce8dc
		'--color-primary-200': '251 227 211', // #fbe3d3
		'--color-primary-300': '248 210 185', // #f8d2b9
		'--color-primary-400': '243 176 132', // #f3b084
		'--color-primary-500': '238 142 79', // #EE8E4F
		'--color-primary-600': '214 128 71', // #d68047
		'--color-primary-700': '179 107 59', // #b36b3b
		'--color-primary-800': '143 85 47', // #8f552f
		'--color-primary-900': '117 70 39', // #754627

		// secondary | #65AEF5
		'--color-secondary-50': '232 243 254', // #e8f3fe
		'--color-secondary-100': '224 239 253', // #e0effd
		'--color-secondary-200': '217 235 253', // #d9ebfd
		'--color-secondary-300': '193 223 251', // #c1dffb
		'--color-secondary-400': '147 198 248', // #93c6f8
		'--color-secondary-500': '101 174 245', // #65AEF5
		'--color-secondary-600': '91 157 221', // #5b9ddd
		'--color-secondary-700': '76 131 184', // #4c83b8
		'--color-secondary-800': '61 104 147', // #3d6893
		'--color-secondary-900': '49 85 120', // #315578

		// tertiary | #133561
		'--color-tertiary-50': '220 225 231', // #dce1e7
		'--color-tertiary-100': '208 215 223', // #d0d7df
		'--color-tertiary-200': '196 205 216', // #c4cdd8
		'--color-tertiary-300': '161 174 192', // #a1aec0
		'--color-tertiary-400': '90 114 144', // #5a7290
		'--color-tertiary-500': '19 53 97', // #133561
		'--color-tertiary-600': '17 48 87', // #113057
		'--color-tertiary-700': '14 40 73', // #0e2849
		'--color-tertiary-800': '11 32 58', // #0b203a
		'--color-tertiary-900': '9 26 48', // #091a30

		// success | #1ec829
		'--color-success-50': '221 247 223', // #ddf7df
		'--color-success-100': '210 244 212', // #d2f4d4
		'--color-success-200': '199 241 202', // #c7f1ca
		'--color-success-300': '165 233 169', // #a5e9a9
		'--color-success-400': '98 217 105', // #62d969
		'--color-success-500': '30 200 41', // #1ec829
		'--color-success-600': '27 180 37', // #1bb425
		'--color-success-700': '23 150 31', // #17961f
		'--color-success-800': '18 120 25', // #127819
		'--color-success-900': '15 98 20', // #0f6214

		// warning | #C2E812
		'--color-warning-50': '246 252 219', // #f6fcdb
		'--color-warning-100': '243 250 208', // #f3fad0
		'--color-warning-200': '240 249 196', // #f0f9c4
		'--color-warning-300': '231 246 160', // #e7f6a0
		'--color-warning-400': '212 239 89', // #d4ef59
		'--color-warning-500': '194 232 18', // #C2E812
		'--color-warning-600': '175 209 16', // #afd110
		'--color-warning-700': '146 174 14', // #92ae0e
		'--color-warning-800': '116 139 11', // #748b0b
		'--color-warning-900': '95 114 9', // #5f7209

		// error | #ee6d6d
		'--color-error-50': '252 233 233', // #fce9e9
		'--color-error-100': '252 226 226', // #fce2e2
		'--color-error-200': '251 219 219', // #fbdbdb
		'--color-error-300': '248 197 197', // #f8c5c5
		'--color-error-400': '243 153 153', // #f39999
		'--color-error-500': '238 109 109', // #ee6d6d
		'--color-error-600': '214 98 98', // #d66262
		'--color-error-700': '179 82 82', // #b35252
		'--color-error-800': '143 65 65', // #8f4141
		'--color-error-900': '117 53 53', // #753535

		// surface | #8fa1b7
		'--color-surface-50': '238 241 244', // #eef1f4
		'--color-surface-100': '233 236 241', // #e9ecf1
		'--color-surface-200': '227 232 237', // #e3e8ed
		'--color-surface-300': '210 217 226', // #d2d9e2
		'--color-surface-400': '177 189 205', // #b1bdcd
		'--color-surface-500': '143 161 183', // #8fa1b7
		'--color-surface-600': '129 145 165', // #8191a5
		'--color-surface-700': '107 121 137', // #6b7989
		'--color-surface-800': '86 97 110', // #56616e
		'--color-surface-900': '70 79 90', // #464f5a
	},
};
