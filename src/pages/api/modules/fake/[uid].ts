import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json([
      {
        name: 'F Aprenda verbo to be em 8 minutos',
        allow: true,
        videoUrl:
          'https://docs.google.com/uc?export=open&id=17nyS2ZYEd6xaUqANv4FDNawn-4OS3Dut',
      },
      {
        name: 'Códigos rápido',
        allow: true,
        videoUrl:
          'https://docs.google.com/uc?export=open&id=1_apBEcdDTwhjd6tteBluxnwY5Lc9q_1Y',
      },
      {
        name: 'Can e Shall',
        allow: true,
        videoUrl:
          'https://doc-04-bs-docs.googleusercontent.com/docs/securesc/rstj6douri9nufhuvsiu2t2epdvqlcj5/kfaopt60li6nre316e2t5ckf3elgl8je/1665612675000/01757859712549995740/14424153387169054892/1_apBEcdDTwhjd6tteBluxnwY5Lc9q_1Y?e=open&ax=ALW9-sBOcQKNWylt3g7hKh6ceKb5ISj4s_L02_BizDqQmcXwGp99blnL71GqtwPLx_bnYvn3xeS-UtUs-8Ij5-PS9AvNsO-AWOVWt__xz9Zj2ROFps5WKxTdDD1G5-UTzHDkrCwCpECXKj8irw0x9VHl-rO8iBt-gLOzPoCRlmDn5eJqezJra16wN6xq6UUJQkR7Gf2Tf9P2H68Cn1pGYwral_ZjALu6ghdTKS0jIYpvSrKKuL7CHQbg9L_1cbAthjSN9dvyOXZzdT6EQ5jbC2SCFWsabBcMvBDrodbt9WFh0iaxYlHM0K1x2_Bd5XVxXIHQ9QvlKRrOCArW5_P8fy711sh69rII-s4K4Rmg-hDLA6ACAQEQ0QYtQobYvKEeHcJLQyZeuzNl_PBqHE_WEBF-89mX__-Dah0xvLA-0HLtYLITZTgjfXdHQifGo-EVOzeZBHILdRdmW29ijfyEVxNS553bqSBza4pU3rEBNJzPc1zr_6MNgTKKp9ID-xvkNRlayK8bBYOVIIDwXGy9vzdNigIxdaapW0W6yOwA3ESurrbANvzowMItO-peP-uCoDEUPJmHNOrTc_be9W-qUuwD2RJn7uAMmitQn7q-0TC4dzlJFJFQDALyCgEnODF_binHV3rihp1HouvDfuZQSDfSwNBXIqGY7kqv-jc_GUafKpwWs9P0yToRL_B_HhCYGVVmEuiRSPNVonf1-rgUcBwH8Br4DPdzyC-lk-RqIwrf9X643HtgzEmwYy0UkHRh3jIQMvNK_-nLEh7r1thdmvAWQAQ3XlBM_9oV2YQTYH0GoxXILMQMvZ-O_CsGIYeQzjRj_3XVHQbLPETj_RQH2MvtVgeVQ-Rm8zNbjixXutSx3BjShXc2e5eewz3RiQEM46rkLgQvyy9UwuXV8gS_Xh9PcXPyu3wbM7NRPT4k9vF1GAf9fA9YwpmQrczgqGFzg8POPw&uuid=40c82fe2-8661-4ce8-8533-627809ece258&authuser=0',
      },
    ])
  } catch (error) {
    res.status(404).end('Not Found')
  }
}
