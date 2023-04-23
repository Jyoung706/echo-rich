const dentalInfoService = (data) => {
  let customizedData = [{}];

  /* if (data.RESULT.CODE === "INFO-200") {
    error.statusCode = 400;
    throw new Error(data.RESULT.MESSAGE);
  } */

  const listTotalCount = data.DentistryHospital[0].head[0].list_total_count;
  const code = data.DentistryHospital[0].head[1].RESULT.CODE;
  const responseMessage = data.DentistryHospital[0].head[1].RESULT.MESSAGE;
  const apiVersion = data.DentistryHospital[0].head[2].api_version;

  customizedData[0].list_total_count = listTotalCount;
  customizedData[0].message = responseMessage;
  customizedData[0].code = code;
  customizedData[0].apiVersion = apiVersion;

  const dentistryHospital = data.DentistryHospital[1].row.map((value) => {
    return Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== null)
    );
  });

  customizedData[0].DentistryHospital = dentistryHospital;

  return customizedData;
};

module.exports = { dentalInfoService };
