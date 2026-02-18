
import { Category, Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bague Éclat Rose',
    price: 450,
    category: Category.BAGUES,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFMujT_sGYFIKQp4DMQGrYkKgFTQ_AlYQYeZ0E6cBPJGmJIXYVBNUyzK0ajPPKhcmY69bWP3GqAZsMHxxHJOG_zvZLXca9zFLipd6fS_AZYPszdAEnHdvIsU5z2KGF06yd9y19WvliKnNR7D_gZDi5YTY6-ua17FKvKFZgsTSoUaCv-kz-KzM2DsZvcfhSIaOtAFaTif-R9kFrPAhUCOQupAXeb02YVrdqMN6HcK9fzs9cUM2YKAZAUANhw5aIqCrQyIyhw1h4fty6',
    badge: 'OR 18K',
    description: 'Une bague délicate en or rose 18 carats ornée d\'un diamant poire éclatant.',
    stock: 2
  },
  {
    id: '2',
    name: 'Sculpture Géo-V1',
    price: 85,
    category: Category.IMPRESSION_3D,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByZ5LQ4q2ocWHNNU7rY0_PhghJ6jk2DgNe0Z24dVTxEpg7rCe293zrasULQiEczEvyewUTeZF-hbn1ccC6nCAgFgniQeI977Qd3H7BQWnBbodWs3Aa7xOL8FeXK-0WNDY5Z39r7WkVVXsphs90Iol3vjwZt7Gz97QvruApncZ0HR-9Cm0NPcaEvjyS-ds2msfeD0hqIvpAiESkfhQlcL4NBVTG-RB354tA3sFu4zXnMYk5EcWYjFgKnDkK-OesddwjgiIN1kf7oAV4',
    badge: 'DESIGN 3D',
    description: 'Pendentif géométrique futuriste imprimé en 3D haute résolution.',
    stock: 12
  },
  {
    id: '3',
    name: 'Perles de Nacre',
    price: 120,
    category: Category.COLLIERS,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-VMLKzkDPdVzH9_6OCnBcOhI-24lEnInbQRgCI7ToQjqUT_F1-ajU63mHMs8OBBuzmUGToi0kUlGCdMcyJqExGSF_6QKhUeA2xRpsVCt-zXqyQ_cVBy_qsYmQjycH6WBkPa7eKX1TIZaSTrFUa3B-w4CB8ee8kxmCosT13Lat61jv1Ru2SVIqwu-vMWGL5meiHEDZUjIhmg-lMw9oX7RReZhdE5lUPvseREKaW0r_0m4XCo-5hMMoZ0L0Gl6Pvyoin5EVy44OczOc',
    description: 'Boucles d\'oreilles élégantes composées de perles de nacre naturelle.',
    stock: 5
  },
  {
    id: '4',
    name: 'Bracelet Tressé',
    price: 95,
    category: Category.BRACELETS,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA3WGWlkqvp85apUlTdPxVattJvbdBxuRcyO5nXaarJkJZEjUpO66XZQlApx3Flk6zLk6FlWDIpd_FbT3aYs5kchq5snMA1wBBJr1jkiNDteVSpIHyd27zdhQYCP5A1TaT9H1TsadFfaIbAe82ZwpsWJ0S4cEuOz-f1HZlQSVgGe6sUGdzLioQkymmjE0UzXviI983MYnNj-S3f8A2sX19aiHgbycGfxY-sHbACJX7Alrw5V5u5SMWzG9AZ55TDmGDw2iOYCTLMfEj',
    description: 'Bracelet artisanal en argent massif tressé à la main.',
    stock: 8
  },
  {
    id: '5',
    name: 'Vénus Futuriste',
    price: 150,
    category: Category.IMPRESSION_3D,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIDhmmJqzzuCMAbTiB-6dGQvua7iR_VaT5yMcDPcUTVSqvqixJIU-LtFesK6BzpaI-QmMPzv1D2DS3juCtMYI-2rznrlyb0D4T1EjYCJeakswfNSIrfSekeq6eAhnALDfgaJEqd2fcWKPmeuDxSrL35q_q-0GV49OMCbUJBpqS3bqkZbKnHQQLto6Ld-PIfBuiE5XQ_3EXmmrNkjvoKx6FqGpvSJVNkHVeVHuC9WpRh7JTBPIyw0BdvHzq8pss0IFvxC_-s0iK_xDI',
    description: 'Buste sculptural moderne revisitant la Vénus classique, impression résine.',
    stock: 3
  },
  {
    id: '6',
    name: 'Solitaire Pure',
    price: 780,
    category: Category.BAGUES,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFSuJ7Br489309HVIa44BZW16ymOqrEzbVh9CId-3zc0ym74or2Ntcw-JoLRKpL6fZPlJ2ApD4SIbbf2oeAdiFMdSqz-224rG_zoDiODCKfs_geEBx4RcKrkm5YH7ANcBwfMudnH1ZHZH93p9S2YD7SckgHG3bZhvc1FXZyP5JfMJsbaTOAJd0nvtif5P2mEO0UkwCTIb-N_Mx28sIxIQ8VDSpkI0fs5mvM8Dc3FeN-hqKj4bv492W2hj2ElHUJ1zorwZ7NdI4iooM',
    description: 'Le solitaire classique revisité, or jaune et diamant blanc pur.',
    stock: 1
  }
];
