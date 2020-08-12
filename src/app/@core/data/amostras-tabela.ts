import { AmostraClasse } from './amostra-classe';

export const Amostras_Todas: AmostraClasse[] = [
  {
    id: 1,
    nome: 'TZ Eu Ag',
    matriz: 'TZO',
    dopantes: 'Eu Ag',
    autor: 'Augusto',
    local: 'Gaveta',

    matrizcomp_1: 'TeO2', concen_matrizcomp_1: 60,
    matrizcomp_2: 'ZnO', concen_matrizcomp_2: 40,
    matrizcomp_3: 'Nada', concen_matrizcomp_3: 0,
    matrizcomp_4: 'Nada', concen_matrizcomp_4: 0,

    dopantecomp_1: 'EuO2', concen_dopantecomp_1: 2,
    dopantecomp_2: 'TbO2', concen_dopantecomp_2: 1,
    dopantecomp_3: 'Nada', concen_dopantecomp_3: 0,
    dopantecomp_4: 'Nada', concen_dopantecomp_4: 0,

    npcomp_1: 'AgNO3', concen_npcomp_1: 2,
    npcomp_2: 'Nada', concen_npcomp_2: 0,
    npcomp_3: 'Nada', concen_npcomp_3: 0,
    npcomp_4: 'Nada', concen_npcomp_4: 0,

    fusao_temperatura: 980, fusao_tempo: 60,
    trat_temperatura: 420, trat_tempo: 60,

    fusao_forno: 'Forno 2', fusao_forno_rampa: 10,
    trat_forno: 'Forno 1', trat_forno_rampa: 10,

    agita_tipo: 'Manual', agita_texto: 'A cada min',

    nucle_temperatura: 420, nucle_tempo: 720,
    nucle_forno: 'Forno 1', nucle_forno_rampa: 10,
    nucle_ciclos: 2, processos_obs: 'teste de obs',

    refusao_fusao_temperatura: 990, refusao_fusao_tempo: 30,
    refusao_trat_temperatura: 425, refusao_trat_tempo: 120,
    refusao_forno_fusao: 'Forno 1', refusao_forno_trat: 'Forno 2',
    refusao_numero: 0, refusao_agita: 'Manual',
    refusao_obs: 'teste de refusao',
  }, 
  {
    id: 2,
    nome: 'TZ 2Eu',
    matriz: 'TZO',
    dopantes: 'Eu',
    autor: 'Augusto',
    local: 'Gaveta',

    matrizcomp_1: 'TeO2', concen_matrizcomp_1: 60,
    matrizcomp_2: 'ZnO', concen_matrizcomp_2: 40,
    matrizcomp_3: 'Nada', concen_matrizcomp_3: 0,
    matrizcomp_4: 'Nada', concen_matrizcomp_4: 0,

    dopantecomp_1: 'EuO2', concen_dopantecomp_1: 2,
    dopantecomp_2: 'Nada', concen_dopantecomp_2: 0,
    dopantecomp_3: 'Nada', concen_dopantecomp_3: 0,
    dopantecomp_4: 'Nada', concen_dopantecomp_4: 0,

    npcomp_1: 'Nada', concen_npcomp_1: 0,
    npcomp_2: 'Nada', concen_npcomp_2: 0,
    npcomp_3: 'Nada', concen_npcomp_3: 0,
    npcomp_4: 'Nada', concen_npcomp_4: 0,

    fusao_temperatura: 980, fusao_tempo: 60,
    trat_temperatura: 420, trat_tempo: 60,

    fusao_forno: 'Forno 1', fusao_forno_rampa: 10,
    trat_forno: 'Forno 2', trat_forno_rampa: 10,

    agita_tipo: 'Nunhuma', agita_texto: '',

    nucle_temperatura: 0, nucle_tempo: 0,
    nucle_forno: '?', nucle_forno_rampa: 0,
    nucle_ciclos: 0, processos_obs: '',

    refusao_fusao_temperatura: 0, refusao_fusao_tempo: 0,
    refusao_trat_temperatura: 0, refusao_trat_tempo: 0,
    refusao_forno_fusao: '?', refusao_forno_trat: '?',
    refusao_numero: 0, refusao_agita: 'Nunhuma',
    refusao_obs: '',
  }, 
  {
    id: 3,
    nome: 'Modelo',
    matriz: '',
    dopantes: '',
    autor: '',
    local: '',

    matrizcomp_1: 'Nada', concen_matrizcomp_1: 0,
    matrizcomp_2: 'Nada', concen_matrizcomp_2: 0,
    matrizcomp_3: 'Nada', concen_matrizcomp_3: 0,
    matrizcomp_4: 'Nada', concen_matrizcomp_4: 0,

    dopantecomp_1: 'Nada', concen_dopantecomp_1: 0,
    dopantecomp_2: 'Nada', concen_dopantecomp_2: 0,
    dopantecomp_3: 'Nada', concen_dopantecomp_3: 0,
    dopantecomp_4: 'Nada', concen_dopantecomp_4: 0,

    npcomp_1: 'Nada', concen_npcomp_1: 0,
    npcomp_2: 'Nada', concen_npcomp_2: 0,
    npcomp_3: 'Nada', concen_npcomp_3: 0,
    npcomp_4: 'Nada', concen_npcomp_4: 0,

    fusao_temperatura: 0, fusao_tempo: 0,
    trat_temperatura: 0, trat_tempo: 0,

    fusao_forno: '?', fusao_forno_rampa: 0,
    trat_forno: '?', trat_forno_rampa: 0,

    agita_tipo: 'Nunhuma', agita_texto: '',

    nucle_temperatura: 0, nucle_tempo: 0,
    nucle_forno: '?', nucle_forno_rampa: 0,
    nucle_ciclos: 0, processos_obs: '',

    refusao_fusao_temperatura: 0, refusao_fusao_tempo: 0,
    refusao_trat_temperatura: 0, refusao_trat_tempo: 0,
    refusao_forno_fusao: '?', refusao_forno_trat: '?',
    refusao_numero: 0, refusao_agita: 'Nunhuma',
    refusao_obs: '',
  }
];

