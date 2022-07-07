```
using System;
using System.Collections.Generic;
using System.Text;

namespace English2NepaliDateConversion
{
    /// <summary>
    /// Static class to store and return Nepali DateData for English2NepaliDateConversion
    /// </summary>
    public static class NepaliDateDataArray
    {
        /// <summary>
        /// Get data for Nepali date conversion.
        /// Returns DateData[] integer array of size 15
        /// { Nepali year for Jan 1    -> array index 0,
        /// Nepali day for Jan 1       -> array index 1,
        /// Number of days in Poush    -> array index 2,
        /// Number of days in Magh     -> array index 3,
        /// Number of days in Falgun   -> array index 4,
        /// Number of days in Chaitra  -> array index 5,
        /// Number of days in Baishak  -> array index 6,
        /// ....
        /// Number of days in Mangshir -> array index 13,
        /// Number of days in Poush }  -> array index 14,
        /// </summary>
        /// <param name="year">Year of English date</param>
        /// <returns>DateData[] integer array of size 15</returns>
        public static int[] GetNepaliDateDataArray(int year)
        {
            switch (year)
            {
                case 1949:
                    return new int[15] { 2005, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 1950:
                    return new int[15] { 2006, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1951:
                    return new int[15] { 2007, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 1952:
                    return new int[15] { 2008, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1953:
                    return new int[15] { 2009, 18, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 1954:
                    return new int[15] { 2010, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1955:
                    return new int[15] { 2011, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 1956:
                    return new int[15] { 2012, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1957:
                    return new int[15] { 2013, 18, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 1958:
                    return new int[15] { 2014, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1959:
                    return new int[15] { 2015, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 1960:
                    return new int[15] { 2016, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1961:
                    return new int[15] { 2017, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30 };

                case 1962:
                    return new int[15] { 2018, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1963:
                    return new int[15] { 2019, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30 };

                case 1964:
                    return new int[15] { 2020, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1965:
                    return new int[15] { 2021, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1966:
                    return new int[15] { 2022, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1967:
                    return new int[15] { 2023, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30 };

                case 1968:
                    return new int[15] { 2024, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1969:
                    return new int[15] { 2025, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1970:
                    return new int[15] { 2026, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1971:
                    return new int[15] { 2027, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1972:
                    return new int[15] { 2028, 17, 30, 29, 30, 30, 31, 31, 32, 31, 32, 30, 30, 29, 30 };

                case 1973:
                    return new int[15] { 2029, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1974:
                    return new int[15] { 2030, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1975:
                    return new int[15] { 2031, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1976:
                    return new int[15] { 2032, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 1977:
                    return new int[15] { 2033, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1978:
                    return new int[15] { 2034, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 31, 29, 30, 30 };

                case 1979:
                    return new int[15] { 2035, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1980:
                    return new int[15] { 2036, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 1981:
                    return new int[15] { 2037, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1982:
                    return new int[15] { 2038, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 1983:
                    return new int[15] { 2039, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1984:
                    return new int[15] { 2040, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 1985:
                    return new int[15] { 2041, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1986:
                    return new int[15] { 2042, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 1987:
                    return new int[15] { 2043, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1988:
                    return new int[15] { 2044, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30 };

                case 1989:
                    return new int[15] { 2045, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1990:
                    return new int[15] { 2046, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30 };

                case 1991:
                    return new int[15] { 2047, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1992:
                    return new int[15] { 2048, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1993:
                    return new int[15] { 2049, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1994:
                    return new int[15] { 2050, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30 };

                case 1995:
                    return new int[15] { 2051, 18, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1996:
                    return new int[15] { 2052, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1997:
                    return new int[15] { 2053, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 1998:
                    return new int[15] { 2054, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 1999:
                    return new int[15] { 2055, 17, 30, 29, 30, 30, 31, 31, 32, 31, 32, 30, 30, 29, 30 };

                case 2000:
                    return new int[15] { 2056, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2001:
                    return new int[15] { 2057, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2002:
                    return new int[15] { 2058, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 2003:
                    return new int[15] { 2059, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 2004:
                    return new int[15] { 2060, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2005:
                    return new int[15] { 2061, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 31, 29, 30, 29 };

                case 2006:
                    return new int[15] { 2062, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 2007:
                    return new int[15] { 2063, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 2008:
                    return new int[15] { 2064, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2009:
                    return new int[15] { 2065, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 2010:
                    return new int[15] { 2066, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 2011:
                    return new int[15] { 2067, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30 };

                case 2012:
                    return new int[15] { 2068, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2013:
                    return new int[15] { 2069, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30 };

                case 2014:
                    return new int[15] { 2070, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 2015:
                    return new int[15] { 2071, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30 };

                case 2016:
                    return new int[15] { 2072, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2017:
                    return new int[15] { 2073, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30 };

                case 2018:
                    return new int[15] { 2074, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 2019:
                    return new int[15] { 2075, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2020:
                    return new int[15] { 2076, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2021:
                    return new int[15] { 2077, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30 };

                case 2022:
                    return new int[15] { 2078, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30 };

                case 2023:
                    return new int[15] { 2079, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2024:
                    return new int[15] { 2080, 16, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29 };

                case 2025:
                    return new int[15] { 2081, 17, 29, 30, 30, 30, 30, 32, 31, 32, 31, 30, 30, 30, 29 };

                default:
                    throw new ArgumentOutOfRangeException(year.ToString(), "English year is out of range. Can not convert to Nepali date");
            }
        }
    }
}

```

```
using System;
using System.Collections.Generic;
using System.Text;

namespace English2NepaliDateConversion
{
    /// <summary>
    /// Main class to convert English date to Nepali date
    /// </summary>
    public static class Convert2NepaliDate
    {
        /// <summary>
        /// Main Algorithm to Convert English date to Nepali date
        /// </summary>
        /// <param name="enDate">English date to get converted</param>
        /// <returns>NepaliDate object with actual Nepali date info</returns>
        public static NepaliDate GetNepaliDate(DateTime enDate)
        {
            #region Core Algorithm for Nepali date conversion
            //Getting Nepali date data for Nepali date calculation
            int[] npDateData = NepaliDateDataArray.GetNepaliDateDataArray(enDate.Year);

            //Getting English day of the year
            int enDayOfYear = enDate.DayOfYear;

            //Initializing Nepali Year from the data
            int npYear = npDateData[0];

            //Initializing Nepali month to Poush (9)
            //This is because English date Jan 1 always fall in Poush month of Nepali Calendar, which is 9th month of Nepali calendar
            int npMonth = 9;

            //Initializing Nepali DaysInMonth with total days in the month of Poush
            int npDaysInMonth = npDateData[2];

            //Initializing temp nepali days
            //This is sum of total days in each Nepali month starting Jan 1 in Nepali month Poush
            //Note: for the month Poush, only counting days after Jan 1
            //***** This is the key field to calculate Nepali date *****
            int npTempDays = npDateData[2] - npDateData[1] + 1;

            //Looping through Nepali date data array to get exact Nepali month, Nepali year & Nepali daysInMonth information
            for (int i = 3; enDayOfYear > npTempDays; i++)
            {
                npTempDays += npDateData[i];
                npDaysInMonth = npDateData[i];
                npMonth++;

                if (npMonth > 12)
                {
                    npMonth -= 12;
                    npYear++;
                }
            }

            //Calculating Nepali day
            int npDay = npDaysInMonth - (npTempDays - enDayOfYear);

            #endregion

            #region Constructing and returning NepaliDate object
            //Returning back NepaliDate object with all the date details
            NepaliDate npDate = new NepaliDate();
            npDate.npDate = String.Format("{0}/{1}/{2}", npYear, npMonth, npDay);
            npDate.npYear = npYear;
            npDate.npMonth = npMonth;
            npDate.npDay = npDay;
            npDate.npDaysInMonth = npDaysInMonth;

            return npDate;
            #endregion
        }
    }
}
```
