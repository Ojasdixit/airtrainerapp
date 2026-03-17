export const Colors = {
    // Primary
    primary: '#1a73e8',
    primaryDark: '#1557b0',
    primaryLight: '#4a90e2',
    primaryGlow: 'rgba(26, 115, 232, 0.15)',

    // Accent
    accent: '#ff6b35',
    accentDark: '#e05a2d',
    accentLight: '#ff8a5c',

    // Background
    background: '#0a0a0f',
    backgroundSecondary: '#111118',
    backgroundTertiary: '#1a1a24',
    card: '#16161f',
    cardHover: '#1e1e2a',
    surface: '#1c1c28',

    // Glass effect colors
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.08)',
    glassLight: 'rgba(255, 255, 255, 0.1)',

    // Text
    text: '#ffffff',
    textSecondary: '#a0a0b0',
    textTertiary: '#6b6b7b',
    textMuted: '#4a4a5a',

    // Status
    success: '#00c853',
    successLight: 'rgba(0, 200, 83, 0.15)',
    warning: '#ffab00',
    warningLight: 'rgba(255, 171, 0, 0.15)',
    error: '#ff1744',
    errorLight: 'rgba(255, 23, 68, 0.15)',
    info: '#00b0ff',
    infoLight: 'rgba(0, 176, 255, 0.15)',

    // Borders
    border: 'rgba(255, 255, 255, 0.08)',
    borderLight: 'rgba(255, 255, 255, 0.12)',
    borderActive: 'rgba(26, 115, 232, 0.4)',

    // Sports Colors
    sportHockey: '#1a73e8',
    sportBaseball: '#d63031',
    sportBasketball: '#e17055',
    sportSoccer: '#00b894',
    sportFootball: '#6c5ce7',
    sportTennis: '#fdcb6e',
    sportGolf: '#55efc4',
    sportSwimming: '#0984e3',
    sportBoxing: '#d63031',
    sportLacrosse: '#a29bfe',

    // Gradient
    gradientStart: '#1a73e8',
    gradientEnd: '#6c5ce7',
    gradientAccent: '#ff6b35',

    // Overlay
    overlay: 'rgba(0, 0, 0, 0.6)',
    overlayLight: 'rgba(0, 0, 0, 0.3)',
};

export const Spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    huge: 48,
};

export const BorderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    pill: 100,
};

export const FontSize = {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    hero: 42,
};

export const FontWeight = {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    heavy: '800' as const,
};

export const Shadows = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    glow: {
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
    },
};
